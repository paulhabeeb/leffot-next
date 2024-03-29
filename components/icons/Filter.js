import PropTypes from 'prop-types'

export default function Filter({ styles }) {
    return (
        <svg
            className={styles}
            xmlns='http://www.w3.org/2000/svg'
            data-name='Layer 1'
            viewBox='0 0 100 100'
        >
            <path d='M52,30 L58,30 L58,46 L52,46 L52,72 L48,72 L48,46 L42,46 L42,30 L48,30 L48,28 L52,28 L52,30 Z M46,42 L54,42 L54,34 L46,34 L46,42 Z'></path>
            <path d='M33,54 L39,54 L39,70 L33,70 L33,72 L29,72 L29,70 L23,70 L23,54 L29,54 L29,28 L33,28 L33,54 Z M27,58 L27,66 L35,66 L35,58 L27,58 Z'></path>
            <path d='M71,45 L77,45 L77,61 L71,61 L71,72 L67,72 L67,61 L61,61 L61,45 L67,45 L67,28 L71,28 L71,45 Z M65,57 L73,57 L73,49 L65,49 L65,57 Z'></path>
        </svg>
    )
}

Filter.propTypes = {
    styles: PropTypes.string,
}
