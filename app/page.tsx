import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Cog,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  Zap,
  Building2,
  Layers,
  GraduationCap,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-2xl border-b border-blue-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <img
                  src="/logo.png"
                  alt="Butwal Engineering Prayogshala Logo"
                  className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <div>
                <h2 className="text-xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Butwal Engineering Prayogshala
                </h2>
                <p className="text-xs text-blue-600">Pvt. Ltd.</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {["Home", "About", "Services", "Programs", "Branches", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group px-3 py-2"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/25 to-blue-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-indigo-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>

          {/* Geometric shapes */}
          <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400/40 rotate-45 animate-bounce delay-300"></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-indigo-400/50 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-20 w-3 h-3 bg-blue-500/60 rotate-45 animate-bounce delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
              Butwal Engineering
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Prayogshala
              </span>
            </h1>

            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-600/20 rounded-3xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl p-6 rounded-3xl border-2 border-blue-200/50 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-105">
                  <img
                    src="/logo.png"
                    alt="Butwal Engineering Prayogshala Logo"
                    className="w-24 h-24 mx-auto rounded-2xl shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Engineering Excellence Since 2077
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              Leading engineering laboratory providing{" "}
              <span className="text-blue-600 font-semibold">innovative solutions</span>, research, and testing
              facilities
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Pioneering engineering excellence with cutting-edge technology and expert solutions across Nepal
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-400 hover:via-blue-500 hover:to-indigo-500 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group transform hover:scale-105 border-0">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 px-8 py-4 text-lg rounded-xl bg-white/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200 rounded-full"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-indigo-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-blue-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              About Our Company
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8">
              Engineering Excellence
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Founded in <span className="font-bold text-blue-600 text-2xl">2077</span>, Butwal Engineering
                Prayogshala Pvt. Ltd. has been at the forefront of engineering research and industrial innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experts delivers top-quality testing, design, and development services to support the
                engineering community in Nepal and beyond.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "2077", label: "Established", icon: Award, color: "from-blue-500 to-blue-600" },
              { number: "5+", label: "Branch Locations", icon: MapPin, color: "from-blue-600 to-indigo-600" },
              { number: "100+", label: "Projects Completed", icon: Cog, color: "from-indigo-600 to-blue-700" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-indigo-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-lg">
              <Target className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Material Testing & Analysis", icon: Layers, gradient: "from-blue-500 to-blue-600" },
              { title: "Mechanical Design & Fabrication", icon: Cog, gradient: "from-blue-600 to-indigo-600" },
              { title: "Prototype Development", icon: Zap, gradient: "from-indigo-600 to-blue-700" },
              { title: "Technical Training Programs", icon: Building2, gradient: "from-blue-700 to-indigo-700" },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-100 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
                <CardHeader className="text-center pb-6 relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 text-lg leading-tight font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-white border border-gray-100 shadow-lg relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30"></div>
            <CardHeader className="text-center pb-8 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-black text-gray-900 mb-4">Material Testing Capabilities</CardTitle>
              <CardDescription className="text-xl text-gray-600">
                Comprehensive testing services with state-of-the-art equipment and certified procedures
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              {/* Testing Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  "Aggregates / Soil",
                  "Cement & Concrete",
                  "UTM Tensile Strength Test",
                  "Bitumen",
                  "G.I. Wire",
                  "Bricks",
                  "Geotechnical (Soil) Test",
                ].map((test, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-700 p-3 justify-center text-sm font-medium border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-xl"
                  >
                    {test}
                  </Badge>
                ))}
              </div>

              {/* Material Testing Images Gallery */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Testing Facilities in Action</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      image: "/material-test1.jpg",
                      title: "Precision Measurement",
                      description: "Digital caliper measurements for accurate material analysis",
                    },
                    {
                      image: "/material-test2.jpg",
                      title: "Laboratory Equipment",
                      description: "Advanced testing apparatus for material property analysis",
                    },
                    {
                      image: "/material-test4.jpg",
                      title: "Field Testing",
                      description: "On-site soil compaction and penetration testing",
                    },
                    {
                      image: "/material-test5.jpg",
                      title: "Tensile Strength Testing",
                      description: "Digital tensile testing machine for material strength analysis",
                    },
                    {
                      image: "/material-test6.jpg",
                      title: "Material Preparation",
                      description: "Sample preparation and analysis in controlled laboratory conditions",
                    },
                    {
                      image: "/material-test7.jpg",
                      title: "Concrete Test Specimens",
                      description: "Standardized concrete cubes for strength testing with proper labeling",
                    },
                  ].map((test, index) => (
                    <Card
                      key={index}
                      className="bg-white border border-gray-100 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
                    >
                      <div className="relative overflow-hidden rounded-t-xl">
                        <img
                          src={test.image || "/placeholder.svg"}
                          alt={test.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                          {test.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">{test.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Additional Testing Equipment */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    image: "/material-test8.jpg",
                    title: "Mobile Testing Unit",
                    description: "Portable equipment for field testing and on-site analysis",
                  },
                  {
                    image: "/material-test9.jpg",
                    title: "Precision Testing",
                    description: "Hands-on operation of digital tensile testing equipment",
                  },
                  {
                    image: "/material-test3.jpg",
                    title: "Advanced Machinery",
                    description: "State-of-the-art testing machines for comprehensive material analysis",
                  },
                ].map((equipment, index) => (
                  <Card
                    key={index}
                    className="bg-white border border-gray-100 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
                  >
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={equipment.image || "/placeholder.svg"}
                        alt={equipment.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                        {equipment.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">{equipment.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programs Held Section */}
      <section id="programs" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-blue-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-lg">
              <GraduationCap className="w-4 h-4 mr-2" />
              Educational Programs
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8">
              Programs Held
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Comprehensive training programs and workshops conducted at our state-of-the-art facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/program1.jpg",
                title: "Hands-on Mechanical Training",
                description: "Practical training sessions on mechanical equipment and machinery operation",
              },
              {
                image: "/program2.jpg",
                title: "Engineering Seminars",
                description: "Professional development seminars for engineers and technical professionals",
              },
              {
                image: "/program3.jpg",
                title: "Equipment Demonstrations",
                description: "Live demonstrations of testing equipment and laboratory procedures",
              },
              {
                image: "/program4.jpg",
                title: "Technical Workshops",
                description: "Interactive workshops covering latest engineering practices and methodologies",
              },
              {
                image: "/program5.jpg",
                title: "Industry Training Programs",
                description: "Specialized training programs designed for industry professionals and students",
              },
              {
                image: "/program6.jpg",
                title: "Laboratory Sessions",
                description: "Comprehensive laboratory training covering various testing and analysis procedures",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-100 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="bg-white border border-gray-100 shadow-lg relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30"></div>
              <CardHeader className="text-center pb-6 relative z-10">
                <CardTitle className="text-3xl font-black text-gray-900 mb-4">Join Our Programs</CardTitle>
                <CardDescription className="text-xl text-gray-600">
                  Enhance your engineering skills with our comprehensive training programs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: Users, title: "Expert Instructors", desc: "Learn from industry professionals" },
                    { icon: Cog, title: "Modern Equipment", desc: "State-of-the-art laboratory facilities" },
                    { icon: Award, title: "Certification", desc: "Recognized training certificates" },
                  ].map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 shadow-lg">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-400 hover:via-blue-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-lg group border-0">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-lg">
              <MapPin className="w-4 h-4 mr-2" />
              Our Network
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8">
              Branches & Management
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { location: "Pyuthan", name: "Roshan", title: "Managing Department Officer" },
              { location: "Arghakhanchi", name: "Er. Prem Poudel", title: "Managing Department Officer" },
              { location: "Dang Lamahi", name: "Er. Probin Karki", title: "Managing Department Officer" },
              { location: "Jajarkot Rimna", name: "Er. Silendra Yadav", title: "Managing Department Officer" },
              { location: "Butwal", name: "Er. Nishan Bhusal", title: "Managing Director" },
            ].map((branch, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-100 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
              >
                {branch.title === "Managing Director" && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-orange-500"></div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {branch.location}
                    </CardTitle>
                    <div
                      className={`w-3 h-3 ${branch.title === "Managing Director" ? "bg-gradient-to-r from-orange-400 to-red-500" : "bg-gradient-to-r from-blue-500 to-blue-600"} rounded-full shadow-lg animate-pulse`}
                    ></div>
                  </div>
                  <CardDescription className="text-lg font-semibold text-blue-600">{branch.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge
                    className={`${
                      branch.title === "Managing Director"
                        ? "bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                        : "bg-gradient-to-r from-blue-500 to-blue-600"
                    } text-white border-0 px-4 py-2 font-semibold text-sm hover:scale-105 transition-transform duration-300`}
                  >
                    {branch.title}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border border-gray-100 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Users className="w-7 h-7 mr-3 text-blue-600" />
                  Leadership Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex justify-between items-center p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <span className="font-semibold text-gray-900 text-lg group-hover:text-blue-700 transition-colors duration-300">
                    Er. Rahul Tandon
                  </span>
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 px-3 py-1 font-medium text-sm hover:scale-105 transition-transform duration-300">
                    Head of Engineering
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <span className="font-semibold text-gray-900 text-lg group-hover:text-orange-600 transition-colors duration-300">
                    Er. Nitisha Bhusal
                  </span>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-3 py-1 font-medium text-sm shadow-lg">
                    Managing Director
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Award className="w-7 h-7 mr-3 text-blue-600" />
                  Partners
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {["Manju Bhusal", "Narayan Bhusal", "Nishan Bhusal", "Nitisha Bhusal"].map((partner, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-900 font-semibold text-lg hover:shadow-md hover:text-blue-700 transition-all duration-300 hover:scale-105"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-blue-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-lg">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8">
              Contact Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "beprayogshala2021@gmail.com", color: "from-blue-500 to-blue-600" },
                { icon: Phone, title: "Phone", info: "071-740071 | 9857087061", color: "from-blue-600 to-indigo-600" },
                {
                  icon: MapPin,
                  title: "Address",
                  info: "Butwal-11, Devinagar, Devi Path",
                  color: "from-indigo-600 to-blue-700",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-500 group hover:-translate-y-1"
                >
                  <div
                    className={`bg-gradient-to-r ${contact.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 text-base">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-white border border-gray-100 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600 text-lg">We'd love to hear from you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                {[
                  { label: "Name", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "Phone", type: "tel" },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 bg-white text-gray-900 placeholder-gray-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 resize-none bg-white text-gray-900 placeholder-gray-400"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-400 hover:via-blue-500 hover:to-indigo-500 text-white py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-lg group border-0">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-32 h-32 border border-blue-500/20 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 border border-indigo-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative group">
                <img
                  src="/logo.png"
                  alt="Butwal Engineering Prayogshala Logo"
                  className="w-14 h-14 rounded-2xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Butwal Engineering Prayogshala
                </h3>
                <p className="text-blue-300 text-sm">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Leading engineering laboratory providing innovative solutions since 2077
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-400">© 2024 Butwal Engineering Prayogshala Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
