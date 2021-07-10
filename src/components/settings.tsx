import * as React from 'react'
import Toggle from 'react-toggle'
import SettingsIcon from 'assets/settings.svg'

// css imports
import 'react-toggle/style.css'

const Settings: React.FC = () => {
    const [showHelpTooltip, toggleHelpTooltip] = React.useState(false)
    const [showHex, toggleHex] = React.useState(false)
    const [showText, toggleText] = React.useState(false)
    const [showLightDarkTint, toggleLightDarkTint] = React.useState(false)
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
            <div className="relative  float-right mt-4  w-12 " ref={refNode}>
                <a
                    className="p-2 w-12 bg-gray-600 rounded-md flex items-center"
                    href=""
                    onClick={(e) => {
                        e.preventDefault()
                        closeHelpTooltip()
                    }}
                >
                    <img
                        width={30}
                        height={30}
                        src={SettingsIcon}
                        alt="settings"
                    />
                </a>

                {showHelpTooltip && (
                    <div
                        id="help-tooltip-box"
                        tabIndex={0}
                        className="mt-1 px-2 py-2  w-96  shadow-md absolute outline-none right-0 border border-gray-200 "
                        onBlur={(e) => {
                            if (!refNode.current.contains(e.target)) {
                                closeHelpTooltip()
                            }
                        }}
                    >
                        <div className="flex items-center  py-2 ">
                            <div className="w-2/3 text-lg">Show Hex Code</div>
                            <div className="w-1/3 text-right pr-2">
                                <Toggle
                                    defaultChecked={showHex}
                                    icons={false}
                                    checked={showHex}
                                    tabIndex={0}
                                    name="showHexToggle"
                                    onChange={() => toggleHex(!showHex)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center border-t border-gray-200 py-2">
                            <div className="w-2/3 text-lg">Show Text</div>
                            <div className="w-1/3 text-right pr-2">
                                <Toggle
                                    defaultChecked={showText}
                                    icons={false}
                                    checked={showText}
                                    tabIndex={0}
                                    name="showText"
                                    onChange={() => toggleText(!showText)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center border-t border-gray-200 py-2">
                            <div className="w-2/3 text-lg">
                                Show Light and Dark tints
                            </div>
                            <div className="w-1/3 text-right pr-2">
                                <Toggle
                                    defaultChecked={showLightDarkTint}
                                    icons={false}
                                    checked={showLightDarkTint}
                                    tabIndex={0}
                                    name="showLightDarkTints"
                                    onChange={() =>
                                        toggleLightDarkTint(!showLightDarkTint)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Settings
