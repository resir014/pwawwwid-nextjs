/**
 * Gets the Medium asset URL from the asset ID.
 *
 * @param assetId The Medium asset ID for the image
 * @param width Maximum width. Defaults to 800.
 */
const getMediumAssetUrl = (assetId: string, width?: number) =>
  `https://cdn-images-1.medium.com/max/${width || 800}/${assetId}`

export default getMediumAssetUrl
