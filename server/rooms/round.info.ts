
export class RoundInfo {
    remainingDonations: string[];
    done: boolean;

    constructor(users: string[]) {
        this.done = false;
        this.remainingDonations = users.slice();
    }

    createDonation(donator: string, donatee: string) {
        let donatedAmount = Math.floor(Math.random() * 20);

        this.remainingDonations.splice(this.remainingDonations.indexOf(donator), 1);

        if (this.remainingDonations.length === 0) {
            this.done = true;
        }

        return {
            donatorName: donator,
            donateeName: donatee,
            donatedAmount: donatedAmount
        }
    }
}