import PropTypes from 'prop-types'

export default function Instagram({ styles }) {
    return (
        <svg
            className={styles}
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M25.522709,13.5369502 C25.7256898,14.3248434 25.8455558,15.1480745 25.8455558,15.9992932 C25.8455558,21.4379334 21.4376507,25.8455558 15.9998586,25.8455558 C10.5623493,25.8455558 6.15416148,21.4379334 6.15416148,15.9992932 C6.15416148,15.1480745 6.27459295,14.3248434 6.4775737,13.5369502 L3.6915357,13.5369502 L3.6915357,27.0764447 C3.6915357,27.7552145 4.24280653,28.3062027 4.92355534,28.3062027 L27.0764447,28.3062027 C27.7571935,28.3062027 28.3084643,27.7552145 28.3084643,27.0764447 L28.3084643,13.5369502 L25.522709,13.5369502 Z M27.0764447,3.6915357 L23.384909,3.6915357 C22.7050083,3.6915357 22.1543028,4.24280653 22.1543028,4.92214183 L22.1543028,8.61509104 C22.1543028,9.29442633 22.7050083,9.84569717 23.384909,9.84569717 L27.0764447,9.84569717 C27.7571935,9.84569717 28.3084643,9.29442633 28.3084643,8.61509104 L28.3084643,4.92214183 C28.3084643,4.24280653 27.7571935,3.6915357 27.0764447,3.6915357 Z M9.84597988,15.9992932 C9.84597988,19.3976659 12.6009206,22.1537374 15.9998586,22.1537374 C19.3987967,22.1537374 22.1543028,19.3976659 22.1543028,15.9992932 C22.1543028,12.6003551 19.3987967,9.84569717 15.9998586,9.84569717 C12.6009206,9.84569717 9.84597988,12.6003551 9.84597988,15.9992932 Z M3.6915357,31.9997173 C1.65296441,31.9997173 0,30.3461875 0,28.3062027 L0,3.6915357 C0,1.6526817 1.65296441,0 3.6915357,0 L28.3084643,0 C30.3473183,0 32,1.6526817 32,3.6915357 L32,28.3062027 C32,30.3461875 30.3473183,31.9997173 28.3084643,31.9997173 L3.6915357,31.9997173 Z'
                id='Imported-Layers'
            />
        </svg>
    )
}

Instagram.propTypes = {
    styles: PropTypes.string,
}