import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const ModalInfo: React.FC = () => {
    console.log('11111333');
    if (!modalRoot) return <p>ПОРТАЛ НЕ МОЖЕТ БЫТЬ СОЗДАН</p>;
    console.log('11111');
    return ReactDOM.createPortal(
        <div>
            <div className="title"></div>
            <div className="content">
                <img src="" alt="" />
                <p>wdqddqd</p>
            </div>
        </div>,
        modalRoot,
    );
};

export default ModalInfo;
