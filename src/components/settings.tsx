import * as React from 'react'
import Toggle from 'react-toggle'
import SettingsIcon from 'assets/settings.svg'
import GithubIcon from 'assets/github.svg'
import ColoursSVG from 'assets/colours.svg'

// css imports
import 'react-toggle/style.css'

interface ShowSettingStateProps {
    hex: boolean
    text: boolean
    lightDarkTint: boolean
}

type ToggleSettingStateProps = {
    hex: React.Dispatch<React.SetStateAction<boolean>>
    text: React.Dispatch<React.SetStateAction<boolean>>
    lightDarkTint: React.Dispatch<React.SetStateAction<boolean>>
}

interface SettingsProps {
    show: ShowSettingStateProps
    toggle: ToggleSettingStateProps
}

const Settings: React.FC<SettingsProps> = ({ show, toggle }) => {
    const [showHelpTooltip, toggleHelpTooltip] = React.useState(false)

    const refNode = React.useRef<HTMLDivElement>(document.createElement('div'))

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClick, false)

        // when component will unmount
        return () => {
            document.removeEventListener('mousedown', handleClick, false)
        }
    }, [])

    const handleClick = (e: any) => {
        console.log(
            'handle click target',
            e.target,
            refNode.current.contains(e.target)
        )
        if (refNode && refNode.current.contains(e.target)) {
            return
        }

        toggleHelpTooltip(false)
    }

    const closeHelpTooltip = () => {
        console.log('on close help tooltip')
        toggleHelpTooltip(showHelpTooltip ? false : true)
    }

    return (
        <>
            <div className="fixed left-0 z-3 top-0 w-full bg-white">
                <div className="mt-6 pl-12 pb-2 border-b border-gray-200 w-full">
                    <div className="flex items-center ">
                        <div>
                            <img src={ColoursSVG} className="w-12 h-12" />
                        </div>
                        <div className="pl-4">
                            <h1 className="text-3xl font-bold text-gray-800">
                                Tailwind Palette
                            </h1>
                            <div className="text-base  text-gray-500">
                                Generate shades and tints for color with its
                                Tailwind CSS config file
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed  right-24 top-4 z-3">
                <a
                    className=""
                    href="https://github.com/meetzaveri/tailwind-palette"
                    target="_blank"
                >
                    <img
                        className="p-2
                     2xl:w-14 2xl:h-14 
                    w-12 h-12
                     bg-white rounded-md "
                        src={GithubIcon}
                        alt="github"
                    />
                </a>
            </div>
            <div className="fixed  right-0 mr-4 z-3 top-4 z-3" ref={refNode}>
                <a
                    className="p-3
                    w-12 h-12 
                    2xl:w-14 2xl:h-14
                    bg-gray-600 rounded-md flex items-center"
                    href=""
                    onClick={(e) => {
                        e.preventDefault()
                        closeHelpTooltip()
                    }}
                >
                    <img
                        className="w-full h-full transition-transform ease-in-out duration-300"
                        src={SettingsIcon}
                        style={{
                            transform: showHelpTooltip
                                ? 'rotate(90deg)'
                                : 'rotate(0deg)',
                        }}
                        alt="settings"
                    />
                </a>

                <div className="relative">
                    <div
                        id="help-tooltip-box"
                        tabIndex={0}
                        style={{
                            opacity: showHelpTooltip ? 1 : 0,
                            visibility: showHelpTooltip ? 'visible' : 'hidden',
                        }}
                        className=" mt-1 px-2 py-2  w-72  bg-white
                            shadow-md absolute outline-none right-0 border border-gray-200 
                             transition-all ease-in-out duration-300
                            "
                        onBlur={(e) => {
                            if (!refNode.current.contains(e.target)) {
                                closeHelpTooltip()
                            }
                        }}
                    >
                        <div className="flex items-center  py-2 ">
                            <div className="w-2/3 text-md">Show Hex Code</div>
                            <div className="w-1/3 text-right pr-2">
                                <Toggle
                                    defaultChecked={show.hex}
                                    icons={false}
                                    checked={show.hex}
                                    tabIndex={0}
                                    name="showHexToggle"
                                    onChange={() => toggle.hex(!show.hex)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center border-t border-gray-200 py-2">
                            <div className="w-2/3 text-md">Show Text</div>
                            <div className="w-1/3 text-right pr-2">
                                <Toggle
                                    defaultChecked={show.text}
                                    icons={false}
                                    checked={show.text}
                                    tabIndex={0}
                                    name="showText"
                                    onChange={() => toggle.text(!show.text)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center border-t border-gray-200 py-2">
                            <div className="w-2/3 text-md">
                                Show Tints and Shades
                            </div>
                            <div className="w-1/3 text-right pr-2">
                                <Toggle
                                    defaultChecked={show.lightDarkTint}
                                    icons={false}
                                    checked={show.lightDarkTint}
                                    tabIndex={0}
                                    name="showLightDarkTints"
                                    onChange={() =>
                                        toggle.lightDarkTint(
                                            !show.lightDarkTint
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings
