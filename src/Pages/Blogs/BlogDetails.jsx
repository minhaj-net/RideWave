import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router';
import { 
  User, 
  Calendar, 
  ArrowRight,
  Share2,
  Tag,
  MessageCircle,
  Quote,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blogs.json')
      .then(res => res.json())
      .then(data => {
        const selectedBlog = data.find(b => b.id === parseInt(id));
        setBlog(selectedBlog);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch blog details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!blog) return <div className="min-h-screen flex items-center justify-center">Blog not found</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section - matching design image */}
      <div className="relative h-[400px] w-full flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-[#011421]/70" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="flex items-start gap-6">
            <div className="w-1.5 h-20 bg-[#FF5A1F] mt-2" />
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                Blog Single
              </h1>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Link to="/" className="text-[#FF5A1F] hover:text-white transition-colors">Home</Link>
                <span className="text-white">→</span>
                <span className="text-white">Blog Single</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-full">
            <div className="bg-white rounded-[3rem] overflow-hidden">
              {/* Featured Image */}
              <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-[350px] md:h-[600px] object-cover"
                />
              </div>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-8 mb-8 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF5A1F]">
                    <img src="https://i.pravatar.cc/100?u=adam" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-bold text-[#011421]">By {blog.author}</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF5A1F]">
                  <Tag size={18} />
                  <span className="text-sm font-bold text-[#011421] tracking-tight">{blog.category}</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF5A1F]">
                  <Calendar size={18} />
                  <span className="text-sm font-bold text-[#011421] tracking-tight">{blog.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF5A1F]">
                  <MessageCircle size={18} />
                  <span className="text-sm font-bold text-[#011421] tracking-tight">{blog.comments ? blog.comments.length : 0} Comments</span>
                </div>
              </div>

              {/* Blog Title */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#011421] mb-8 leading-[1.2]">
                {blog.title}
              </h2>

              {/* Content Sections */}
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-medium px-2">
                <p>{blog.description}</p>
                <p>{blog.subDescription}</p>

                {/* Styled Blockquote */}
                <div className="relative py-12 px-10 md:px-16 bg-white overflow-hidden my-12">
                   <div className="absolute top-0 left-10 text-[#FF5A1F]/10">
                      <Quote size={120} fill="currentColor" />
                   </div>
                   <blockquote className="relative z-10 text-2xl md:text-3xl font-bold text-[#011421] italic leading-tight">
                      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
                   </blockquote>
                   <p className="relative z-10 text-[#FF5A1F] font-extrabold mt-6 uppercase tracking-wider text-sm">— {blog.author}, {blog.category} Specialist</p>
                </div>

                {/* Dynamic Content Sections */}
                {blog.sections && blog.sections.map((section, idx) => (
                  <div key={idx} className="space-y-8">
                    {section.heading && (
                      <h3 className="text-3xl font-extrabold text-[#011421] mt-12 mb-6">
                        {section.heading}
                      </h3>
                    )}
                    <p>{section.content}</p>

                    {/* Image Grid Section */}
                    {section.images && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                        {section.images.map((img, i) => (
                          <div key={i} className="overflow-hidden rounded-[2rem] shadow-lg group">
                            <img 
                              src={img} 
                              alt="Process" 
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Feature & Side Image Section */}
                    {section.sideImage && (
                      <div className="flex flex-col md:flex-row gap-12 items-center my-12">
                        <div className="w-full md:w-1/2 space-y-6">
                           <h4 className="text-2xl font-bold text-[#011421]">{section.heading}</h4>
                           <ul className="space-y-4">
                              {section.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3">
                                  <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 size={18} className="text-[#FF5A1F]" />
                                  </div>
                                  <span className="text-gray-700 font-bold text-sm tracking-tight">{feature}</span>
                                </li>
                              ))}
                           </ul>
                        </div>
                        <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] shadow-xl">
                           <img src={section.sideImage} alt="Feature" className="w-full h-[350px] object-cover" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags and Share */}
              <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 px-2">
                <div className="flex items-center gap-4">
                  <span className="text-[#011421] font-extrabold uppercase text-xs tracking-widest">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Transport', 'Logistics', 'Warehouse', 'Inventory'].map(tag => (
                      <span key={tag} className="bg-gray-100 px-6 py-2.5 rounded-xl text-sm font-bold text-gray-500 hover:bg-[#FF5A1F] hover:text-white cursor-pointer transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[#011421] font-extrabold uppercase text-xs tracking-widest">Share:</span>
                  <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <button key={i} className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#FF5A1F] hover:text-white hover:border-[#FF5A1F] transition-all">
                        <Icon size={18} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-24 px-2">
                 <h3 className="text-3xl font-extrabold text-[#011421] mb-12 flex items-center gap-4">
                    Comments ({blog.comments ? blog.comments.length : 0})
                 </h3>
                 <div className="space-y-12">
                   {blog.comments && blog.comments.map((comment) => (
                     <div key={comment.id} className="flex gap-6 items-start">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shrink-0">
                           <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow bg-[#F6F9FA] p-8 rounded-[2.5rem] relative">
                           {/* Arrow for speech bubble */}
                           <div className="absolute top-8 -left-3 w-6 h-6 bg-[#F6F9FA] rotate-45" />
                           <div className="flex justify-between items-center mb-4">
                              <div>
                                 <h4 className="text-lg font-extrabold text-[#011421]">{comment.author}</h4>
                                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{comment.date}</span>
                              </div>
                              <button className="text-[10px] uppercase font-bold text-gray-400 hover:text-[#FF5A1F] tracking-widest flex items-center gap-2">
                                 Reply
                                 <ArrowRight size={14} />
                              </button>
                           </div>
                           <p className="text-gray-600 font-medium leading-relaxed italic">
                              "{comment.text}"
                           </p>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Leave a Reply Form */}
              <div className="mt-24 px-2">
                 <div className="bg-[#011421] p-10 md:p-16 rounded-[4rem] text-white">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Leave a Reply</h3>
                    <p className="text-gray-400 mb-10 font-bold text-sm tracking-tight italic">
                       Your email address will not be published. Required fields are marked *
                    </p>
                    <form className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <input 
                            type="text" 
                            placeholder="Your Name *" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5A1F] transition-colors"
                          />
                          <input 
                            type="email" 
                            placeholder="Email Address *" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5A1F] transition-colors"
                          />
                       </div>
                       <textarea 
                         rows="6" 
                         placeholder="Comment *" 
                         className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none"
                       ></textarea>
                       <div className="flex items-center gap-3 py-2">
                          <input type="checkbox" id="save" className="w-5 h-5 accent-[#FF5A1F] rounded" />
                          <label htmlFor="save" className="text-xs font-bold text-gray-400">Save my name, email, and website in this browser for the next time I comment.</label>
                       </div>
                       <button className="flex items-center gap-3 bg-[#FF5A1F] text-white px-10 py-5 rounded-2xl font-extrabold text-sm uppercase tracking-widest hover:bg-[#e04e1a] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#FF5A1F]/20 group">
                          Post Comment
                          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                       </button>
                    </form>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;