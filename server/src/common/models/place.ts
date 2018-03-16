export default class Place {
  constructor(
    public id: number,
    public parentId: number,
    public code: string,
    public type: string,
    public name: string
  ) {}
}
