import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Level {
  @Field()
  user_ID!: number;

  @Field()
  xp!: number;
}
