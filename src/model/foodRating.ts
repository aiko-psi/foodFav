import DateTimeFormat = Intl.DateTimeFormat;

class FoodRating {
    private name: string;
    private category: FoodCategory;
    private createdAt: Date;
    private updatedAt: Date;
    private overallRating: UnipolarRating;
    private ratings: Array<Rating>;
    private constructor(name: string, category: FoodCategory, createdAt?: Date) {
        this.name = name;
        this.createdAt =  createdAt ? createdAt : new Date();
        this.category = category;
        this.ratings = category.createRatings();
    }

}
