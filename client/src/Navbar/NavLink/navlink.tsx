import { useState } from 'react'
import { AnimateRound } from '../AnimateRound/animateRound'

const CIRCLE_PATH = "M118.044 89.6246C163.162 89.4205 222.936 90.424 262.268 64.685C273.127 57.5785 289.889 46.2541 280.644 31.5415C266.757 9.43877 226.597 6.18947 204.103 4.22275C163.951 0.712215 122.736 4.85252 83.8345 15.462C59.5841 22.0757 20.3308 33.8561 6.3903 57.3016C-30.0407 118.572 238.749 125.617 256.853 126.542"

export default function NavLink({ href, label, isActive }: { href: string, label: string, isActive: boolean }) {
    const [hovering, setHovering] = useState(false)

    return (
        <li
            className="navbar-link"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <a href={href}>{label}</a>
            {(isActive || hovering) && (
                <AnimateRound
                    key={isActive ? 'active' : 'hover'} 
                    width="105"
                    height="60"
                    viewBox="0 0 286 105"
                    className="active-circle"
                    path={CIRCLE_PATH}
                    strokeColor="#928989"
                    strokeWidth={2}
                    animationDuration={1}
                    initialAnimation={true}
                />
            )}
        </li>
    )
}