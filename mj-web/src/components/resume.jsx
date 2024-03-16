import React from "react";

class Resume extends React.Component {
    render() {
        return (
            <section id="resume" className="resume-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Resume</h3>
                                <p className="subtitle-a">
                                    Please click on the button to view my Resume!
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center"> {/* Center the button */}
                        <div className="col-sm-12 text-center">
                            <p className="pt-3">
                                <a
                                  className="btn btn-primary btn js-scroll px-4"
                                  href="https://drive.google.com/file/d/1VvdFbQG8iCvRWG1KGjjFLXCJEDgtUYMj/view?usp=sharing"
                                  role="button"
                                  target="_blank"  
                                >
                                  Resume
                                </a>
                              </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
