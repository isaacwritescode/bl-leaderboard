import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Coins {
  @Field()
  user_ID!: number;

  @Field()
  points!: number;
}
