import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import { useState } from "react";
import Bglogin from "../../images/bg-login.png"
import Logologin from "../../images/logo-footer.png"
import "./login.css";
import { HOME, LOGIN } from "../../router";

const Daftar = () => {

    const [password, setPassword] = useState(false)

    return (
        <HOC title="Daftar - Komoditiku">
            <div className="wrapper__login">
                <div className="back-login">
                <Link to={HOME}><i className="bi bi-x"></i></Link>
                </div>                          
                <img src={Bglogin} alt="" className="bg-login" width="100%" />
                <div className="row">
                    <div className="col-5">
                        <div className="text-login">
                            <img src={Logologin} alt="" />
                            <h5>Mengembangkan, Membangun UMKM dengan <br />Inovasi dan Teknologi</h5>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>        
                        </div>                 
                    </div>
                    <div className="col-7">
                        <div className="form-logindaftar">
                            <h1>Silakan Daftar</h1>
                            <div className="formlogin-box">
                                <div className="form-floating mt-4">
                                    <input type="text" className="form-control" id="floatingText" placeholder="text" />
                                    <label htmlFor="floatingText">Nama Lengkap</label>
                                </div>
                                <div className="form-floating mt-4">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">E-mail</label>
                                </div>
                                <div className="form-floating mt-4 mb-3">
                                    <input type={ password ? "text" : "password"} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Kata Sandi</label>
                                    {password ? <i className="bi bi-eye password-check" onClick={()=>setPassword(!password)}></i> :<i className="bi bi-eye-slash password-check" onClick={()=>setPassword(!password)}></i> }
                                </div>
                                <p>Lupa Akun? <span><Link href="">Klik Disini!</Link></span></p>
                            </div>   
                            <div className="btn-login text-center">
                                <Link to="#" className="btn">Daftar</Link> 
                            </div>
                            <div className="text-auth text-center mt-3">
                                <p>Sudah memiliki akun? <span><Link to={LOGIN}>Masuk</Link></span></p>
                                <p>Apakah anda pelaku UMKM? <span><Link to={LOGIN}>Daftar sebagai pelaku UMKM</Link></span></p>
                            </div>
                        </div>                   
                    </div>
                </div>    
            </div>
        </HOC>

  );
}

export default Daftar;