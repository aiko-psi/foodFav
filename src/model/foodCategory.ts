
class FoodCategory {
    private name: string;
    private ratingCategories: Array<Rating>;
    public createRatings() {
        return this.ratingCategories.map(rating => rating.copy());
    }
    private addRating(rating: Rating){
        this.createRatings().concat(rating);
    }
}
