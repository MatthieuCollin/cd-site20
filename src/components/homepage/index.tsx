import './index.scss';
import cd from '../../assets/img/4SZko61aMnmgvNhfhgTuD3.jpg'

export default function Homepage (){
    return(
        <div className="container">
            <h2>TOP 10</h2>
            <div className="box">
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
            </div>
            <div className="separateur"></div>
            <h2>AJOUT RÉCENT</h2>
            <div className="box">
            <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
                <div className="card">
                    <img srcSet={cd} alt="" />
                </div>
            </div>
        </div>
    )
}