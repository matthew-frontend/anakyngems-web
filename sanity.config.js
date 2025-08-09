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

  basePath: "/admin", // Will be accessed via kosol.anakyngems.com/admin

  theme: darkBlueTheme,

  plugins: [
    structureTool({
      structure: (S) => {
        return S.list()
          .title('Content')
          .items([
            // Products - simplified structure
            S.listItem()
              .title('Products')
              .child(
                S.list()
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
                    
                    // Static category filters (faster)
                    S.listItem()
                      .title('MEN\'S RING')
                      .child(
                        S.documentTypeList('product')
                          .title('Men\'s Ring Products')
                          .filter('category->title == "MEN\'S RING"')
                      ),
                    
                    S.listItem()
                      .title('WOMEN RING')
                      .child(
                        S.documentTypeList('product')
                          .title('Women Ring Products')
                          .filter('category->title == "WOMEN RING"')
                      ),
                    
                    S.listItem()
                      .title('EARRING')
                      .child(
                        S.documentTypeList('product')
                          .title('Earring Products')
                          .filter('category->title == "EARRING"')
                      ),
                    
                    S.listItem()
                      .title('NECKLACE')
                      .child(
                        S.documentTypeList('product')
                          .title('Necklace Products')
                          .filter('category->title == "NECKLACE"')
                      ),
                    
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
                  ])
              ),
            
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
