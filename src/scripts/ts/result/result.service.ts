import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';

export class ResultService {

  list: Array<ResultModel>;

  constructor() {
    this.list = [];
  }

  public addResult(newResult:ResultModel) {
		if(!this.resultAlreadyExist(newResult.id)) {
      const event: ResultEventModel = {id: "created", idOwner: newResult.idOwner, createdAt: new Date()}
      newResult.eventResults.push(event)
      this.list.push(newResult)
    }
  }

  public seenResult(idResult:number) {
		const resultIndex = this.list.findIndex(elem => elem.id === idResult);
    if (resultIndex !== -1){
      const result =  this.list[resultIndex];
      const event: ResultEventModel = {id: "seen", idOwner: result.idOwner, createdAt: new Date()}

      result.isSeen = true;
      result.eventResults.push(event)
		}
  }

  public unseenResult(idResult:number) {
		const resultIndex = this.list.findIndex(elem => elem.id === idResult);
    if (resultIndex !== -1){
      const result =  this.list[resultIndex];
      const event: ResultEventModel = {id: "unseed", idOwner: result.idOwner, createdAt: new Date()}

      result.isSeen = false;
      result.eventResults.push(event)
    }
    
  }

	private resultAlreadyExist(idResult:number): boolean {
    return this.list.findIndex(elem => elem.id === idResult) !== -1;
  }

  public getAllResult() : Array<ResultModel> {
    return this.list;
  }

	public getAllSortedResult() : Array<ResultModel> {
    return this.list.sort((curr, next) => {
      const currCreationDate = curr.eventResults.find(elem => elem.id === 'created')!.createdAt;
      const nextCreationDate = next.eventResults.find(elem => elem.id === 'created')!.createdAt;

      if(currCreationDate < nextCreationDate) return -1;
      if(currCreationDate > nextCreationDate) return -1;
      return 0;
    })
  }
  

	public getAllResultSeen() : Array<ResultModel> {
    return this.list.filter(elem => elem.isSeen === true);
  }


	public getAllResultUnSeen() : Array<ResultModel> {
    return this.list.filter(elem => elem.isSeen === false);
  }
	
	public numberOfEventSeen() : number
  {
    return 0;
  }
}



