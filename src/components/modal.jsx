import ReactDOM from 'react-dom'
const Modal = ({ show, onCloseButtonClick, children }) => {
    if (!show) {
        return null
    }

    return ReactDOM.createPortal(
        <div
            onClick={onCloseButtonClick}
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50"
        > 
            <div className="p-8 bg-white rounded-md w-[90%] h-5/6">
                <h2 className="mb-4 text-lg font-bold">
                    <button className="float-right" onClick={onCloseButtonClick}>
                        X
                    </button>
                </h2>
                <div className="body w-full h-full overflow-auto">{children}</div>
                {/* <div className="footer">
                    <button onClick={onCloseButtonClick}>Close Modal</button>
                </div> */}
            </div>
        </div>,
        document.body,
    )
}

export default Modal
