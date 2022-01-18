import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';

export class ResultService {

  list: Array<ResultModel>;

  constructor() {
    this.list = [];
  }

  public addResult(newResult:ResultModel) {
		this.list.push(newResult)
  }

  public seenResult(idResult:number) {
		return [];

  }

  public unseenResult(idResult:number) {
		return [];
    
  }

  public getAllResult() : Array<ResultModel> {
    return this.list;
  }

  public getAllSortedResult() : Array<ResultModel> {
		return [];
  
  }

  public getAllResultSeen() : Array<ResultModel> {
		return [];
  
  }

  public getAllResultUnSeen() : Array<ResultModel> {

		return [];
  }

}


