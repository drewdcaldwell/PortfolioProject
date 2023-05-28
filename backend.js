function loadData() {
    // Make an AJAX call to the backend to fetch some data
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        // Update the output element with the fetched data
        document.getElementById('output').textContent = JSON.stringify(data);
      })
      .catch(error => console.error(error));
  }

  function toggleText() {
    var x = document.getElementById("hiddenText");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//This function will show the description of different CS classes as the user selects one.
function showDescription_CS() {
    var selectBox = document.getElementById("mySelect");
    var descriptionBox = document.getElementById("description");
    var selectedValue = selectBox.value;

    if (selectedValue === "option1") {
        descriptionBox.innerHTML = "(IUK) CSCI-B100 PROBLEM SOLVING USING COMPUTERS. This course introduces problem solving techniques, critical thinking skills, algorithm development, and computer programming, using real-world problems. Topics include: computer literacy, hardware, data representation, structured and object oriented programming techniques, modularity and reusability, and testing and debugging techniques.";
    } else if (selectedValue === "option2") {
        descriptionBox.innerHTML = "(IUK) CSCI-C101 COMPUTER PROGRAMMING I. Fundamental concepts of computer programming, algorithm development, and data structuring. Skills Gained: Java (language), Software development process, problem solving techniques.";
    }
    else if (selectedValue === "option3") {
        descriptionBox.innerHTML = "(IUK) CSCI-C201 COMPUTER PROGRAMMING II. Computer programming and algorithms. Basic programming and program structure. Computer solutions of problems. Skills Gained: Java (language), Software development process, problem solving techniques, proficiency in java, data structures, algorithms.";
    }
    else if (selectedValue === "option4") {
        descriptionBox.innerHTML = "(IUK) INFO-I201 MATHEMATICAL FOUNDATIONS OF INFORMATICS: An introduction to methods of analytical, abstract and critical thinking, deductive reasoning; and logical and mathematical tools used in information sciences. Topics include propositional and predicate logic, natural deduction proof system, sets, functions and relations, proof methods in mathematics, mathematical induction, and graph theory. Skills Gained: Logic, reasoning, proof methods.";
    }
    else if (selectedValue === "option5") {
        descriptionBox.innerHTML = "(IUK) INFO-I202 SOCIAL INFORMATICS: Introduction to key social research perspectives and literatures on the use of information and communication technologies. Discusses current topics such as information ethics, relevant frameworks, popular and controversial uses of technology (e.g., peer-to-peer file sharing), digital divides, etc. Outlines research methodologies for social informatics.";
    }
    else {
        descriptionBox.innerHTML = "";
    }
}

//This function displays different math courses as the user selects them on the website
function showDescription_Math() {
    var selectBox = document.getElementById("Select");
    var descriptionBox1 = document.getElementById("description1");
    var selectedValue = selectBox.value;

    if (selectedValue === "precalculus") {
        descriptionBox1.innerHTML = "(IVYT) MATH 136 COLLEGE ALGEBRA: Presents an in-depth study of functions, quadratic, polynomial, radical, and rational equations, radicals, complex numbers, absolute value equations and inequalities, rational fractions and exponential and logarithmic functions.";
    }
    else if (selectedValue === "trigonometry") {
        descriptionBox1.innerHTML = "(IVYT) MATH 137 TRIGONOMETRY with ANALYTICAL GEOMETRY: Presents an in-depth study of right triangle trigonometry, oblique triangles, vectors, graphs of trigonometric functions, trigonometric identities and equations and complex numbers in rectangular and polar/trigonometric forms, rectangular and polar coordinates and conics.";
    }
    else if (selectedValue === "calculusone") {
        descriptionBox1.innerHTML = "(IUK) MATH-M215 CALCULUS I: Limits, continuity, derivatives, definite and indefinite integrals, applications.";
    } else if (selectedValue === "calculustwo") {
        descriptionBox1.innerHTML = "(IUK) MATH-M216 CALCULUS II: Limits, continuity, derivatives, definite and indefinite integrals, applications, techniques of integration, infinite series.";
    }
    else if (selectedValue === "calculusthree") {
        descriptionBox1.innerHTML = "(IUE) MATH-M311 CALCULUS III: Elementary geometry of 2, 3, and n-space, functions of several variables, partial differentiation, minimum and maximum problems, multiple integration.";
    }
    else if (selectedValue === "linearalgebra") {
        descriptionBox1.innerHTML = "(IUK) MATH-M303 LINEAR ALGEBRA: Introduction to the theory of real vector spaces. Coordinate systems, linear dependence, bases. Linear transformations and matrix calculus. Determinants and rank. Eigenvalues and eigenvectors.";
    }
    else if (selectedValue === "euclideangeometry") {
        descriptionBox1.innerHTML = "(IUK) MATH-T366 EUCLIDEAN AND NON-EUCLIDEAN GEOMETRY: A study of the central aspects of two-dimensional Euclidean geometry from historical and axiomatic points of view as well as through hands-on and/or computer-based exploration of geometric concepts and constructions.";
    }
    else if (selectedValue === "probabilitytheory") {
        descriptionBox1.innerHTML = "(IUK) MATH-M463 INTRO TO PROBABILITY THEORY: Counting techniques, the meaning of probability. Random experiments, conditional probability, independence. Random variables, expected values and standard deviations, moment generating functions, important discrete and continuous distributions. Poisson processes. Multivariate distributions, basic limit laws such as the central limit theorem.";
    }
    else if (selectedValue === "statistics") {
        descriptionBox1.innerHTML = "(IUK) MATH-M466 INTRO TO MATHEMATICAL STATISTICS: Rigorous mathematical treatment of problems in sampling and statistical inference. Sufficient statistics, exponential distributions, monotone likelihood ratio, most powerful tests, minimum variance estimates, shortest confidence intervals, linear models and analysis of variance, nonparametric methods.";
    }
     else {
        descriptionBox1.innerHTML = "";
    }
}
//This function displays different elective courses and gives a description as the user 
//selects them from the drop down menu
function showDescription_Elective() {
    var selectBox = document.getElementById("Select3");
    var descriptionBox = document.getElementById("description3");
    var selectedValue = selectBox.value;

    if (selectedValue === "span101") {
        descriptionBox.innerHTML = "(IVYT) SPANISH I: An introductory course in Spanish. Focuses on developing students’ capacity to use the language and to appreciate Spanish-speaking cultures. Emphasis is placed on skills of listening, speaking, reading, writing, and grammar acquisition.";
    }
    else if (selectedValue === "span102") {
        descriptionBox.innerHTML = "(IVYT) SPANISH II: Continues the study of Spanish for students who have had the equivalent of one semester of college-level Spanish. Introduces additional grammatical structures and vocabulary to further develop speaking, reading, writing and listening skills as well as an appreciation of the cultures of the Spanish-speaking world."
    }
    else if (selectedValue === "hist101") {
        descriptionBox.innerHTML = "(IVYT) SURVEY of AMERICAN HISTORY I: Covers major themes and events in American history from domestic and global standpoints, including exploration of the New World; the colonial period; causes and results of the American Revolution; the development of the federal system of government; the growth of democracy; early popular American culture; territorial expansion; slavery and its effect; reform movements, sectionalism; causes and effects of the Civil War.";
    }
    else if (selectedValue === "hist102") {
        descriptionBox.innerHTML = "(IVYT) SURVEY of AMERICAN HISTORY II: Covers major themes including the post Civil War period, western expansion, industrial growth of the nation and its effects, immigration and urban discontent and attempts at reform, World War I, the Roaring Twenties, social and governmental changes of the thirties, World War II and its consequences, the growth of the federal government, social upheaval in the sixties and seventies, and recent trends in conservatism, globalization, and cultural diversity.";
    }
    else if (selectedValue === "engl111") {
        descriptionBox.innerHTML = "(IVYT) ENGLISH COMPOSITION: English Composition is designed to develop students’ abilities to craft, organize, and express ideas clearly and effectively in their own writing. This course incorporates critical reading, critical thinking, and the writing process, as well as research and the ethical use of sources in writing for the academic community. Extended essays, including a researched argument, are required.";
    }
    else if (selectedValue === "scin100") {
        descriptionBox.innerHTML = "(IVYT) EARTH SCIENCE: Introduces physical concepts and theories pertaining to current applications and trends in earth science. Basic concepts in geology, meteorology, oceanography, and astronomy will be illustrated. Includes lab.";
    }
    else if (selectedValue === "ivyt111") {
        descriptionBox.innerHTML = "(IVYT) STUDENT SUCCES in UNIVERSITY TRANSFER: This course provides students with an overview of skills and strategies necessary to successfully complete a degree or certificate from Ivy Tech Community College and to transfer to a four-year institution. Students focus on developing an individualized transfer plan focused on reaching their educational, career, and life objectives. ";
    }
    else if (selectedValue === "comm101") {
        descriptionBox.innerHTML = "(IVYT) FUNDAMENTALS OF PUBLIC SPEAKING: Introduces fundamental concepts and skills for effective public speaking, including audience analysis, outlining, research, delivery, critical listening and evaluation, presentational aids, and use of appropriate technology. ";
    }
    else if (selectedValue === "educf200") {
        descriptionBox.innerHTML = " (IUK) EDUC-F 200 EXAMINING SELF AS TEACHER: ";
    }
    else if (selectedValue === "educp214") {
        descriptionBox.innerHTML = "EDUC-P214 LIFESPAN DEVELOPMENT: This course introduces students to psychological development across the lifespan. Students will learn trends in normal psychological development from infancy through adulthood. Case studies and classroom examples will be used to provide context to apply theories of psychological development. Students will begin to understand the application of developmental psychology to teaching.";
    }
    else if (selectedValue === "chemc100") {
        descriptionBox.innerHTML = "CHEM-C100 THE WORLD OF CHEMISTRY: The chemistry of everyday life: fuels, plastics, drugs, water, air, and living systems. Lectures illustrated by demonstrations, films, and molecular models. Readings include articles from current newspapers and magazines.";
    }
    else if (selectedValue === "chemc120") {
        descriptionBox.innerHTML = "CHEM-C120 CHEMISTRY LABORATORY: Illustration of chemical principles with applications to biology, the environment, and health.";
    }
    else if (selectedValue === "socs100") {
        descriptionBox.innerHTML = "SOC-S100 INTRODUCTION TO SOCIOLOGY: Introduction to the concepts and methods of sociology with an emphasis on the understanding of contemporary American society.";
    }
    else if (selectedValue === "engw221") {
        descriptionBox.innerHTML = "ENG-W2211 SOPHOMORE WRITING LAB: An intermediate writing course focused on researching and writing longer, more substantive arguments, summaries, analysis papers, and multimodal projects on topics and issues related to the student's major area of academic interest.";
    }
    else if (selectedValue === "educk205") {
        descriptionBox.innerHTML = "EDUC-K205 INTRODUCTION TO EXCEPTIONAL CHILDREN:An intermediate writing course focused on researching and writing longer, more substantive arguments, summaries, analysis papers, and multimodal projects on topics and issues related to the student's major area of academic interest. ";
    }
    else if (selectedValue === "educw200") {
        descriptionBox.innerHTML = "EDUC-W200 USING COMPUTERS IN EDUCATION: Required of all students pursuing teacher education. Introduction to instructional computing and educational computing literature. Hands-on experience with educational software, media, and online applications. ";
    }
    else if (selectedValue === "busf151") {
        descriptionBox.innerHTML = "BUS-F151 PERSONAL FINANCES OF THE COLLEGE STUDENT:  Introduction to the basic planning tools and concepts for college-age financial literacy. Emphasis on financial decisions and challenges facing a typical college student. Topics include, careers, goal setting, budgeting, tax planning and credit, including options for financing higher education. Foundation of the Financial Literacy Curriculum.";
    }
    else if (selectedValue === "musm174") {
        descriptionBox.innerHTML = "MUS-M174 MUSIC FOR THE LISTENER";
    }
    else if (selectedValue === "physp201") {
        descriptionBox.innerHTML = "PHYS-P201 GENERAL PHYSICS I: Newtonian mechanics, wave motion, heat, and thermodynamics. Application of physical principles to related scientific disciplines, especially life sciences. Intended for students preparing for careers in the life sciences and the health professions. ";
    }

     else {
        descriptionBox.innerHTML = "";
    }
}