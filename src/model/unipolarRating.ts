
class UnipolarRating extends Rating {
    private categoryName: string;
    public copy(): Rating {
        const rating = new UnipolarRating();
        rating.categoryName = this.categoryName;
        return rating;
    }
}
