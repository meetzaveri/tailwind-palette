import * as React from 'react'

import { ChromePicker } from 'react-color'

export interface InputSectionProps {
    setShowOutput(hexcode: string): any
}

const InputSection: React.FC<InputSectionProps> = ({ setShowOutput }) => {
    const [inputValue, setInput] = React.useState('ff0059')

    const onChangeInput = (e: any) => {
        let value: string = e.target.value

        if (value.includes('#')) {
            let index = value.indexOf('#')
            value = value.slice(index + 1, value.length)
        }
        console.log('on change input', value)
        setInput(value)
    }

    const onSubmit = () => {
        setShowOutput(inputValue)
    }

    const handleChangeComplete = (color: any) => {
        let newInput = color.hex.replace('#', '')
        // color.hex.splice(1, color.hex.length)
        setInput(newInput)
    }

    return (
        <div className="w-full sm:w-6/12 flex items-center  ">
            <div
                className="flex flex-wrap px-4 py-6 
            "
            >
                <div className="w-full lg:w-1/2">
                    <ChromePicker
                        className="cursor-pointer"
                        color={`#${inputValue}`}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
                <div className="w-full lg:px-4 lg:w-1/2">
                    <div
                        className="h-full flex flex-col flex-shrink-0 items-end justify-between  "
                        style={{ width: '245px' }}
                    >
                        <div className=" py-2 text-lg font-semibold text-gray-700">
                            <span role="img" aria-label="backhand-left">
                                👈
                            </span>{' '}
                            Pick a color or type your color hexcode directly
                            {/* <span role="img" aria-label="backhand-down">
                        👇
                    </span>{' '} */}
                        </div>
                        <form action="" className="w-full ">
                            <div className="pb-4">
                                <label
                                    htmlFor="email"
                                    className="text-sm block font-bold pb-2"
                                >
                                    Color
                                </label>
                                <div className="flex relative">
                                    <div className="absolute top-2 left-2 text-lg">
                                        #
                                    </div>
                                    <input
                                        type="hexcode"
                                        name="hexcode"
                                        id=""
                                        value={inputValue}
                                        onChange={onChangeInput}
                                        className="pl-6 pr-16 py-2 w-full
                        text-lg rounded-md border border-gray-300 
                        focus:outline-none focus:shadow-outline "
                                        placeholder="4ef455"
                                    />

                                    <span
                                        className="mt-2 rounded-md w-7 h-7 "
                                        style={{
                                            background: `#${inputValue}`,
                                            marginLeft: '-35px',
                                        }}
                                    ></span>
                                </div>
                            </div>
                            <div className="w-full">
                                <button
                                    className="w-full 
                             bg-gray-500 hover:bg-gray-700 
                            text-white font-bold px-4 py-2 rounded 
                            focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={onSubmit}
                                >
                                    Generate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputSection
