import { NextResponse } from 'next/server';
import { getBehindBrandPosts, getBlogPost } from '@/sanity/client';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || 12;
    const slug = searchParams.get('slug');

    if (slug) {
      const post = await getBlogPost(slug).catch(() => null);
      if (!post) {
        return NextResponse.json(
          { success: false, error: 'Blog post not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: post
      });
    }

    const posts = await getBehindBrandPosts(parseInt(limit)).catch(() => []);
    
    return NextResponse.json({
      success: true,
      data: posts,
      count: posts.length
    });

  } catch (error) {
    console.error('Error fetching behind-brand posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}