import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataTermsProvider {

  items: any;

  constructor(public http: Http) {
    this.items = [
      { term: 'AMRAP', description: 'As Many Reps (sometimes Rounds)as Possible - typically in a specified time' },
      { term: 'ATG', description: 'Ass to Grass' },
      { term: 'BMU', description: 'Bar Muscle ups' },
      { term: 'BP', description: 'Bench Press' },
      { term: 'BS', description: 'Bench Squat' },
      { term: 'BW (or BWT)', description: 'Body Weight' },
      { term: 'CFT', description: 'CrossFit Total - consisting of max squat, press and deadlift' },
      { term: 'CFSB', description: 'CrossFit Strength Bias' },
      { term: 'CFWU', description: 'CrossFit Warm-up' },
      { term: 'CLN', description: 'Clean' },
      { term: 'C&J', description: 'Clean and jerk' },
      { term: 'C2', description: 'Concept II rowing machine' },
      { term: 'C2B', description: 'Chest to Bar' },
      { term: 'DL', description: 'Deadlift' },
      { term: 'DU', description: 'Double Under' },
      { term: 'FS', description: 'Front Squat' },
      { term: 'GHR(D)', description: 'Glute ham raise (developer)' },
      { term: 'GHR(D) Situp', description: 'Situp done on the GHR(D) bench' },
      { term: 'HSPU', description: 'Hand Stand Push Up' },
      { term: 'HSQ', description: 'Hang squat (clean or snatch)' },
      { term: 'KB', description: 'Kettlebell' },
      { term: 'KBS', description: 'Kettlebell Swing' },
      { term: 'KTE', description: 'Knees to elbows' },
      { term: 'MetCon', description: 'Metabolic Conditioning workout' },
      { term: 'MP', description: 'Military Press' },
      { term: 'MU', description: 'Muscle ups' },
      { term: 'OHS', description: 'Overhead Squat' },
      { term: 'PC', description: 'Power Clean' },
      { term: 'Pd', description: 'Pood, weight measure for kettlebells' },
      { term: 'PR', description: 'Personal record' },
      { term: 'PP', description: 'Push press' },
      { term: 'PSN', description: 'Power snatch' },
      { term: 'PU', description: 'Pull-ups, possibly push ups depending on the context' },
      { term: 'Rep', description: 'Repetition. One performance of an exercise.' },
      { term: 'Rx’d; as Rx’d', description: 'As prescribed; as written. WOD done without any adjustments.' },
      { term: 'RM', description: 'Repetition maximum. Your 1RM is your max lift for one rep. Your 10 RM is the most you can lift 10 times.' },
      { term: 'SDHP', description: 'Sumo Deadlift High Pull' },
      { term: 'SN', description: 'Snatch' },
      { term: 'S2O', description: 'Shoulder to Overhead' },
      { term: 'SQ', description: 'Squat' },
      { term: 'SU', description: 'Single Under' },
      { term: 'TGU', description: 'Turkish Get-Up' },
      { term: 'TTB or T2B', description: 'Toes to Bar' },
      { term: 'WO, sometimes W/O', description: 'Workout' },
      { term: 'WOD', description: 'Workout of the day' },
    ];
  }

  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.term.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


}
