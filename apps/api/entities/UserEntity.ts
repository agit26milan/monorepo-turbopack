class UserEntity {
  constructor(
    private email?: string,
    private name?: string,
    private photoUrl?: string,
    private createdAt?: number,
    private updatedAt?: number,
    private totalAverageWeightRatings?: number,
    private numberOfRents?: number,
    private recentlyActive?: number,
    private uid?:string
  ) {}

  generatePayloadCreateDocumentUser(){
    return {
        email: this.email || '',
        name: this.name || '',
        photoUrl: this.photoUrl || '',
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        totalAverageWeightRatings: this.totalAverageWeightRatings,
        numberOfRents: this.numberOfRents,
        recentlyActive: this.recentlyActive,
        uid: this.uid
    }
  }
}

export default UserEntity