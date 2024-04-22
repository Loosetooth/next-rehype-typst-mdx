import createMDX from '@next/mdx'
import remarkMath from 'remark-math'
import rehypeTypst from '@myriaddreamin/rehype-typst'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeTypst
    ],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)