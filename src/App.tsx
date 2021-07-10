import React, { FC, HTMLAttributes, ReactChild } from 'react'

import logo from './logo.svg'

import Setttings from 'components/settings'
import InputSection from 'components/input'
import DisplayOutput from 'components/displayOutputColor'

import './App.css'

export const App: FC = () => {
    const [showOutput, setShowOutput] = React.useState(false)
    const [hexCode, setHexCodeStr] = React.useState('')

    return (
        <section
            className="
         w-full px-8"
        >
            <div className="w-full relative ">
                <Setttings />
                <InputSection
                    setShowOutput={(str) => {
                        setHexCodeStr(str)
                        setShowOutput(true)
                    }}
                />

                <DisplayOutput
                    hexcode={hexCode}
                    showOutput={showOutput}
                    onHideOutput={() => setShowOutput(false)}
                />
            </div>
        </section>
    )
}

export default App
