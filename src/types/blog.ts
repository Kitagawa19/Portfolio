import { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'

import { Category } from './Category'

export type Blog = {
  title: string
  category: Category & MicroCMSListContent
  toc_visible: boolean
  body: string
  description: string
  ogimage: MicroCMSImage
  related_blogs: MicroCMSListResponse<Blog>['contents']
}