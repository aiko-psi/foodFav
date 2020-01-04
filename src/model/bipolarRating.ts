
class BipolarRating extends Rating {
    private lowerLabel: string;
    private upperLabel: string;
    public copy(): Rating {
        const rating = new BipolarRating();
        rating.lowerLabel = this.lowerLabel;
        rating.upperLabel = this.upperLabel;
        return rating;
    }
}
