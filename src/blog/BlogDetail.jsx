import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];
import Tags from '../shop/Tags'
import PopularPost from "../shop/PopularPost"
const BlogDetail = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curpage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id} className="">
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Aperiam quasi sit possimus
                                  omnis odit quam, voluptas dicta quisquam in
                                  aspernatur assumenda error unde reprehenderit
                                  velit est odio, commodi debitis beatae!, Lorem
                                  ipsum dolor sit amet, consectetur adipisicing
                                  elit. Sed dignissimos cupiditate dolores
                                  placeat neque, recusandae inventore rem illum
                                  repellendus architecto id, maiores, tenetur
                                  quidem incidunt praesentium quasi nesciunt
                                  quia porro.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Asperiores distinctio
                                    reprehenderit aspernatur optio consequuntur
                                    esse cupiditate totam necessitatibus placeat
                                    beatae expedita, illo suscipit quis
                                    explicabo saepe enim delectus facilis! Quos?
                                  </p>
                                  <cite>
                                    <a href="#">...Ninggen Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Vel molestias sequi, a aut
                                  voluptate fuga facere quasi! Asperiores sunt
                                  tempore et earum nostrum id! Laborum deserunt,
                                  a sapiente quod veniam cupiditate labore
                                  exercitationem consectetur qui praesentium
                                  debitis nesciunt omnis consequatur. Natus
                                  eveniet qui non eius laborum a maiores ea
                                  blanditiis.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Voluptatibus distinctio
                                  cupiditate magnam ab modi facilis beatae
                                  voluptatem esse ipsam itaque cum sequi saepe,
                                  eos quae maiores? Quidem exercitationem ad
                                  saepe.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/VAaUy_Moivw?si=RbpSBi2zyi_ZVv3U"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Numquam assumenda suscipit
                                  quas ea voluptatem voluptas ipsum facilis
                                  alias blanditiis autem rem voluptates
                                  accusantium molestias, quo corporis et
                                  eligendi consequuntur sed.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li><a href="#">Agency</a></li>
                                    <li><a href="#">Busines</a></li>
                                    <li><a href="#">Personal</a></li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                  {
                                    socialList.map((val,i)=>(
                                      <li key={i}>
                                      <a href="" className={val.className}>

                                        <i className={val.iconName}></i>
                                      </a>
                                      </li>
                                    ))
                                  }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i>Previous Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Pararel Procces Via Technica Sound Models Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i>Previous Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Pararel Procces Via Technica Sound Models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
