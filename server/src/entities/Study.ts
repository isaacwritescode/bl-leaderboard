import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Study {
  @Field()
  user_ID!: number;

  @Field()
  total!: number;

  @Field()
  daily!: number;

  @Field()
  yesterday!: number;

  @Field()
  weekly!: number;

  @Field()
  monthly!: number;

  @Field()
  stream!: number;

  @Field()
  video!: number;

  @Field()
  streak!: number;
}
