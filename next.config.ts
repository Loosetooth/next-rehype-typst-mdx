import createMDX from '@next/mdx'
import remarkMath from 'remark-math'
// @ts-expect-error: No types available
import rehypeTypst from '@myriaddreamin/rehype-typst'
import { NextConfig } from 'next'
import { remarkTypstAsMath } from './utils/remarkTypstAsMath'

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkMath,
      remarkTypstAsMath,
    ],
    rehypePlugins: [
      rehypeTypst
    ],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)