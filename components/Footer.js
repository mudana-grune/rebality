import { ADDRESS, APP_NAME, WA_NUM } from "@/utils/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="mu-footer">
            <div className="container">
                <div className="mu-footer-area">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mu-footer-left">
                                <p className="mu-copy-right">
                                    © Copyright{" "}
                                    <Link rel="nofollow" href="/">
                                        {APP_NAME}
                                    </Link>
                                    . All right reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <p><span className="px-1"><i className="fa fa-map-marker"></i></span>{ADDRESS}</p>
                                <p><span><i className="fa fa-whatsapp"></i></span> {WA_NUM}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mu-footer-right">
                                <div className="mu-social-media">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}