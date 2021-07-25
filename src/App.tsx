import React, { FC, HTMLAttributes, ReactChild } from 'react'

import logo from './logo.svg'

// component imports
import Setttings from 'components/settings'
import InputSection from 'components/input'
import DisplayOutput from 'components/displayOutputColor'

// assets imports
import SpamSVG from 'assets/spam.svg'

import './App.css'

export const SettingsContext = React.createContext({})

export const App: FC = () => {
    const [showOutput, setShowOutput] = React.useState(false)
    const [hexCode, setHexCodeStr] = React.useState('')

    // part of settings
    const [showHex, toggleHex] = React.useState(true)
    const [showText, toggleText] = React.useState(true)
    const [showLightDarkTint, toggleLightDarkTint] = React.useState(true)

    const showSettingsObject = {
        hex: showHex,
        text: showText,
        lightDarkTint: showLightDarkTint,
    }
    return (
        <section
            className="
         w-full px-8"
        >
            <div className="w-full relative ">
                <SettingsContext.Provider value={showSettingsObject}>
                    <Setttings
                        show={{
                            hex: showHex,
                            text: showText,
                            lightDarkTint: showLightDarkTint,
                        }}
                        toggle={{
                            hex: toggleHex,
                            text: toggleText,
                            lightDarkTint: toggleLightDarkTint,
                        }}
                    />
                    <InputSection
                        setShowOutput={(str) => {
                            setHexCodeStr(str)
                            setShowOutput(true)
                        }}
                    />

                    {showOutput ? (
                        <div className="transition-all duration-500 ease-in-out">
                            <DisplayOutput
                                hexcode={hexCode}
                                showOutput={showOutput}
                                onHideOutput={() => setShowOutput(false)}
                            />
                        </div>
                    ) : (
                        <div className="mt-16">
                            <div className="flex items-center justify-center p-10">
                                <img
                                    width="150"
                                    height="150"
                                    src={SpamSVG}
                                    alt="color-palette"
                                />
                            </div>
                            <div className="text-xl font-bold text-center">
                                No color palette to show. Please select or type
                                color palette from above input{' '}
                            </div>
                        </div>
                    )}
                </SettingsContext.Provider>
            </div>
        </section>
    )
}

export default App
