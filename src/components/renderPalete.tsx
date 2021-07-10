import * as React from 'react'
import { ToastProvider, useToasts } from 'react-toast-notifications'

export interface RenderPaletteProps {
    item: String
    index: number
}

const RenderPalette: React.FC<RenderPaletteProps> = ({ item, index }) => {
    const { addToast } = useToasts()
    return (
        <React.Fragment>
            <div
                className="rounded-lg w-full sm:w-9/12 lg:w-5/12 xl:w-3/12 
            mr-3 mb-3 
            overflow-hidden"
            >
                <div className="">
                    <div
                        className="h-20 relative"
                        style={{ background: `#${item}` }}
                    >
                        <div className="pb-2 absolute bottom-1 w-full text-center">
                            <span className="text-black text-sm mx-2">A</span>
                            <span className="text-black text-lg mx-2">A</span>
                            <span className="text-white text-sm mx-2">A</span>
                            <span className="text-white text-lg mx-2">A</span>
                        </div>
                    </div>
                    <div className="py-4 px-2 flex items-center justify-between bg-gray-100">
                        <div className="text-gray-600">{100 * index}</div>
                        <div
                            className="color-box cursor-pointer hover:underline relative text-gray-600"
                            onClick={(e) => {
                                e.stopPropagation()
                                navigator.clipboard.writeText(
                                    `#${item.toUpperCase()}`
                                )
                                console.log('on click copy hexcode')
                                addToast('Hexcode copied', {
                                    appearance: 'success',
                                })
                            }}
                        >
                            {`#${item.toUpperCase()}`}
                            <span
                                className=" w-20  text-xs absolute -top-7 right-0 
                                        color-box-tooltip bg-gray-600 text-white px-1 py-1 cursor-pointer"
                            >
                                click to copy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RenderPalette
