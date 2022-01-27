const pythonDetails = "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.";

const cDetails = "C (/ˈsiː/, as in the letter c) is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. " +
"Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.";

const javaDetails = "Java is a programming language originally developed by Sun Microsystems and released in 1995 as a core component of Sun's Java platform. The language derives much of its Syntax from C and C++ but has a simpler object model and fewer low-level facilities. Java applications are typically compiled to bytecode which can run on any Java virtual machine (JVM) regardless of computer architecture.";

const cppDetails = "C++ (/ˌsiːˌplʌsˈplʌs/) is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software " + "Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.";

const csharpDetails = "C# (/si ʃɑːrp/ see sharp) is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.";

const visualBasicDetails = "VBA is an implementation of Microsoft's event-driven programming language Visual Basic 6, which was declared legacy in 2008, and is an associated integrated development environment (IDE). Although pre-.NET Visual Basic is no longer supported or updated by Microsoft, the VBA programming language was upgraded in 2010 with the introduction of Visual Basic for Applications 7 in Microsoft Office applications.";

const jsDetails = "JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.";

const assemblyDetails = "Assembly language is a type of low-level programming language that is intended to communicate directly with a computer’s hardware. Unlike machine language, which consists of binary and hexadecimal characters, assembly languages are designed to be readable by humans.";

const sqlDetails = "SQL, in full structured query language, computer language designed for eliciting information from databases. In the 1970s computer scientists began developing a standardized way to manipulate databases, and out of that research came SQL. The late 1970s and early ’80s saw the release of a number of SQL-based products. SQL gained popularity when the American National Standards Institute (ANSI) adopted the first SQL standard in 1986. " +
"Continued work on relational databases led to improvements in SQL, making it one of the most popular database languages in existence. Some large software companies, such as Microsoft Corporation and Oracle Corporation, produced their own versions of SQL, and an open-source version, MySQL, became extremely popular.";

var swiftDetails = "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to " +
" interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms, it uses the Objective-C runtime library, which allows C, Objective-C, C++ and Swift code to run within one program.";

const phpDetails = "No comment.";

const rDetails = "R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing. Created by statisticians Ross Ihaka and Robert Gentleman, R is used among data miners and statisticians for data analysis and developing statistical software. Users have created packages to augment the functions of the R language.";

const goDetails = "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. The language is often referred to as Golang because of its former domain name, golang.org, but the proper name is Go.";

const delphiDetails = "Delphi is a software product that uses the Delphi dialect of the Object Pascal programming language and provides an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software, currently developed and maintained by Embarcadero Technologies. Delphi's compilers generate native code for Microsoft Windows, macOS, iOS, Android and Linux (x64).";

const classicVisualDetails = "Visual Basic (also referred to as Classic Visual Basic is a third-generation event-driven programming language from Microsoft known for its Component Object Model (COM) programming model first released in 1991 and declared legacy during 2008. Microsoft intended Visual Basic to be relatively easy to learn and use. Visual Basic was derived from BASIC and enables the rapid application development (RAD) of graphical user interface (GUI) applications, " +
"access to databases using Data Access Objects, Remote Data Objects, or ActiveX Data Objects, and creation of ActiveX controls and objects.";

const matlabDetails = "MATLAB (an abbreviation of 'MATrix LABoratory') is a proprietary multi-paradigm programming language and numeric computing environment developed by MathWorks. MATLAB allows matrix manipulations, plotting of functions and data, implementation of algorithms, creation of user interfaces, and interfacing with programs written in other languages.";

const groovyDetails = "Apache Groovy is a Java-syntax-compatible object-oriented programming language for the Java platform. It is both a static and dynamic language with features similar to those of Python, Ruby, and Smalltalk. It can be used as both a programming language and a scripting language for the Java Platform, is compiled to Java virtual machine (JVM) bytecode, and interoperates seamlessly with other Java code and libraries. Groovy uses a curly-bracket syntax similar to Java's. " +
"Groovy supports closures, multiline strings, and expressions embedded in strings. Much of Groovy's power lies in its AST transformations, triggered through annotations.";

const rubyDetails = "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan.";

const fortranDetails = "Fortran (/ˈfɔːrtræn/; formerly FORTRAN) is a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing. Fortran was originally developed by IBM in the 1950s for scientific and engineering applications, and subsequently came to dominate scientific computing. It has been in use for over six decades in computationally intensive areas such as numerical weather prediction, " +
"finite element analysis, computational fluid dynamics, geophysics, computational physics, crystallography and computational chemistry. It is a popular language for high-performance computing and is used for programs that benchmark and rank the world's fastest supercomputers.";

const perlDetails = "Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages. 'Perl' refers to Perl 5, but from 2000 to 2019 it also referred to its redesigned 'sister language', Perl 6, before the latter's name was officially changed to Raku in October 2019. Though Perl is not officially an acronym, there are various backronyms in use, including 'Practical Extraction and Reporting Language'. Perl was developed by Larry Wall in 1987 as " +
"a general-purpose Unix scripting language to make report processing easier. Since then, it has undergone many changes and revisions. Raku, which began as a redesign of Perl 5 in 2000, eventually evolved into a separate language. Both languages continue to be developed independently by different development teams and liberally borrow ideas from each other.";


const languageDetails = new Map();
languageDetails.set('python', pythonDetails);
languageDetails.set('c', cDetails);
languageDetails.set('java', javaDetails);
languageDetails.set('cpp', cppDetails);
languageDetails.set('csharp', csharpDetails);
languageDetails.set('visual_basic', visualBasicDetails);
languageDetails.set('java_script', jsDetails);
languageDetails.set('assembly_language', assemblyDetails);
languageDetails.set('sql', sqlDetails);
languageDetails.set('swift', swiftDetails);
languageDetails.set('php', phpDetails);
languageDetails.set('r', rDetails);
languageDetails.set('go', goDetails);
languageDetails.set('delphi', delphiDetails);
languageDetails.set('classic_visual_basic', classicVisualDetails);
languageDetails.set('matlab', matlabDetails);
languageDetails.set('groovy', groovyDetails);
languageDetails.set('ruby', rubyDetails);
languageDetails.set('fortran', fortranDetails);
languageDetails.set('perl', perlDetails);

export const languageDetailsMap = new Map(languageDetails);
