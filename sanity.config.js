import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import darkBlueTheme from "./sanity/theme/dark-blue";

export default defineConfig({
  name: "anakyngems-cms",
  title: "ANAKYNGEMS CMS",

  projectId: "1xk2cwmy", // Your project ID from Sanity
  dataset: "production",
  apiVersion: "2024-01-01",

  basePath: "/admin", // Admin panel will be at /admin

  theme: darkBlueTheme,

  plugins: [
    structureTool({
      structure: (S, context) => {
        // Function to get categories dynamically
        const getCategoryItems = async () => {
          try {
            const categories = await context.getClient({ apiVersion: '2024-01-01' }).fetch(
              '*[_type == "category"] | order(title asc)'
            );
            
            return categories.map(category => 
              S.listItem()
                .id(category._id)
                .title(category.title)
                .child(
                  S.documentTypeList('product')
                    .title(`${category.title} Products`)
                    .filter('category._ref == $categoryId')
                    .params({ categoryId: category._id })
                )
            );
          } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
          }
        };

        return S.list()
          .title('Content')
          .items([
            // Products organized by category
            S.listItem()
              .title('Products')
              .child(async () => {
                const categoryItems = await getCategoryItems();
                
                return S.list()
                  .title('Products by Category')
                  .items([
                    // All products
                    S.listItem()
                      .title('All Products')
                      .child(
                        S.documentTypeList('product')
                          .title('All Products')
                          .defaultOrdering([
                            {field: 'category.title', direction: 'asc'},
                            {field: 'title', direction: 'asc'}
                          ])
                      ),
                    
                    S.divider(),
                    
                    // Dynamic categories
                    ...categoryItems,
                    
                    S.divider(),
                    
                    // Products by tags
                    S.listItem()
                      .title('Best Sellers')
                      .child(
                        S.documentTypeList('product')
                          .title('Best Seller Products')
                          .filter('"best_seller" in productTags')
                      ),
                    
                    S.listItem()
                      .title('Recommended')
                      .child(
                        S.documentTypeList('product')
                          .title('Recommended Products')
                          .filter('"recommended" in productTags')
                      ),
                      
                    S.listItem()
                      .title('For Sale')
                      .child(
                        S.documentTypeList('product')
                          .title('Sale Products')
                          .filter('"for_sale" in productTags')
                      ),
                      
                    S.listItem()
                      .title('Highlight Products')
                      .child(
                        S.documentTypeList('product')
                          .title('Highlight Products')
                          .filter('"highlight_products" in productTags')
                      ),
                  ]);
              }),
            
            // Categories
            S.documentTypeListItem('category').title('Categories'),
            
            // Blog Posts
            S.documentTypeListItem('blog').title('Blog Posts'),
          ]);
      }
    }),
    visionTool()
  ],

  studio: {
    components: {
      layout: (props) => {
        // Inject custom CSS
        if (typeof document !== "undefined") {
          const existingLink = document.querySelector("#sanity-custom-styles");
          if (!existingLink) {
            const link = document.createElement("link");
            link.id = "sanity-custom-styles";
            link.rel = "stylesheet";
            link.href = "/sanity-studio.css";
            document.head.appendChild(link);
          }
        }
        return props.renderDefault(props);
      },
    },
  },

  schema: {
    types: schemaTypes,
  },
});
