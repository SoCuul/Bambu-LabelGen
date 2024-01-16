import { Canvg } from 'canvg'

/**
 * Render and download the generated label
 */
export async function downloadLabel (): Promise<void> {
    const svgElement = document.querySelector('#full-sized-label') as SVGSVGElement
    const { width, height } = svgElement.viewBox.baseVal

    const canvas = document.querySelector('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    canvas.width = width
    canvas.height = height

    // Create canvas from label svg element
    const v = await Canvg.from(ctx, svgElement.outerHTML)
    v.render()

    // Prompt user to download label file
    downloadURI(canvas.toDataURL('image/png'), 'Label.png')
}

/**
 * Prompt the browser to show download dialog for a data URI
 * 
 * @param uri The data URI to download
 * @param name The file name presented by default to the user
 */
export async function downloadURI (uri: string, name: string): Promise<void> {
    const link = document.createElement("a")
    link.download = name
    link.href = uri

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}