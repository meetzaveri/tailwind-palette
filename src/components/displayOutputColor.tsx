import * as React from 'react'
import ReactJson from 'react-json-view'

import { ReactComponent as DoubleRightArrowSVG } from '../assets/double_right_arrow.svg'
import RenderPalette from './renderPalete'
import { calculateShades, calculateTints } from 'utils/coreUtils'

export interface DisplayOutputProps {
    hexcode: string
    showOutput: Boolean
    onHideOutput(event: any): any
}

const DisplayOutput: React.FC<DisplayOutputProps> = ({
    hexcode,
    showOutput,
    onHideOutput,
}) => {
    const lightPalette: Array<String> = calculateTints(hexcode)
    const darkPalette: Array<String> = calculateShades(hexcode)
    const generalPalette: Array<String> = []

    const themeJSON: any = { light: {}, dark: {} }

    lightPalette.reverse().forEach((item, index) => {
        if (index > 0 && index % 2 === 0) {
            generalPalette.push(item)
        }
        themeJSON.light[index * 100] = `#${item.toUpperCase()}`
    })
    darkPalette.forEach((item, index) => {
        if (index > 0 && index % 2 === 0 && item !== '000000') {
            generalPalette.push(item)
        }
        themeJSON.dark[index * 100] = `#${item.toUpperCase()}`
    })
    console.log('lightPalette', lightPalette)
    return (
        <div className="my-4">
            <div
                className={` transition-all duration-200 ease-in-out bg-white py-8 ${
                    showOutput ? `opacity-100 ` : `opacity-0  `
                }`}
            >
                <div className="w-full flex flex-wrap ">
                    <div className="w-full sm:w-6/12 xl:w-8/12  px-4">
                        <div className="w-full mt-6">
                            <div className="text-xl  font-semibold text-gray-700">
                                Mix{' '}
                                <span className="text-sm text-gray-500">
                                    (general theme)
                                </span>
                            </div>
                            <div className="w-full mt-4 flex flex-wrap items-center">
                                {generalPalette.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <RenderPalette
                                            item={item}
                                            index={index}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="w-full mt-6">
                            <div className="text-xl  font-semibold text-gray-700">
                                Tints{' '}
                                <span className="text-sm text-gray-500">
                                    (light theme)
                                </span>
                            </div>
                            <div className="w-full mt-4 flex flex-wrap items-center">
                                {lightPalette.map((item, index) =>
                                    item !== 'ffffff' ? (
                                        <React.Fragment key={index}>
                                            <RenderPalette
                                                item={item}
                                                index={index}
                                            />
                                        </React.Fragment>
                                    ) : null
                                )}
                            </div>
                        </div>

                        <div className="w-full mt-10 pb-8 ">
                            <div className=" text-xl font-semibold text-gray-700">
                                Shades{' '}
                                <span className="text-sm text-gray-500">
                                    (dark theme)
                                </span>
                            </div>
                            <div className="w-full mt-4 flex flex-wrap items-center">
                                {darkPalette.map((item, index) =>
                                    item !== '000000' ? (
                                        <React.Fragment key={index}>
                                            <RenderPalette
                                                item={item}
                                                index={index}
                                            />
                                        </React.Fragment>
                                    ) : null
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-6/12 xl:w-4/12 px-4 my-6">
                        <div className="text-xl">
                            Generated Tailwind config{' '}
                        </div>
                        <div>
                            <ReactJson
                                style={{
                                    maxWidth: '80%',
                                }}
                                displayObjectSize={false}
                                displayDataTypes={false}
                                name="theme"
                                src={themeJSON}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayOutput
