let categories = [
    { id: 1, category: "Web Development", cssId: "web-dev" },
    { id: 2, category: "Security", cssId: "security" },
    { id: 3, category: "Design", cssId: "design" },
    { id: 4, category: "Mobile Development", cssId: "mobile-dev" },
    { id: 5, category: "Data Science", cssId: "data-science" },
    { id: 6, category: "Machine Learning", cssId: "machine-learning" },
]

let courses = [
    { id: 1, courseTitle: "Lorem ipsum dolor sit amet.", price: 150 },
    { id: 2, courseTitle: "Lorem ipsum dolor sit.", price: 10 },
    { id: 3, courseTitle: "Lorem ipsum dolor sit amet consectetur.", price: 11 },
    { id: 4, courseTitle: "adipisicing elit. Recusandae, numquam.", price: 32 },
    { id: 5, courseTitle: "commodi nobis explicabo enim quasi numquam.", price: 50 },
    { id: 6, courseTitle: "Provident, quia officiis recusandae harum similique ut", price: 22 },
]



initCoursesPage()

function initCoursesPage() {
    let myCategories = document.getElementById("my-categories");
    let myCourses = document.getElementById("my-courses")

    //Addin Categories to html page 
    for (const index in categories) {
        myCategories.innerHTML += `
            <div class="form-check">
                <input class="form-check-input shadow-none" type="radio" name="radio-for-categories" id="${categories[index].cssId}">
                <label class="form-check-label" for="${categories[index].cssId}">
                    ${categories[index].category}
                </label>
            </div>`
    }

    //Addin Courses to html page
    for (const index in courses) {
        myCourses.innerHTML += `
            <div class="card p-3 mb-3">
                <img class="card-img-top" src="http://placehold.it/900x350" alt="Card image cap">
                <div class="card-body">
                    <div>
                        <h5 class="card-title"><a href="./course-details.html">${courses[index].courseTitle}</a></h5>
                        <div class="review-rate-info">
                            <div class="rates-star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>

                                <strong class="col-lg-8 col-md-8 col-12 rates-average">4.5</strong>
                            </div>
                            <div class="review">
                                <span>350 reviews</span>
                            </div>
                        </div>
                        <h6 class="card-price">${courses[index].price}$</h6>
                    </div>

                    <div>
                        <img src="http://placehold.it/900x350" alt="" class="instructor-img">instructor name
                    </div>
                    


                </div>
            </div>`
    }
}