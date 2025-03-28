import { Column, Entity, Index } from "typeorm";

@Index("tmp_pkey", ["tmp_1"], { unique: true })
@Entity("tmp", { schema: "public" })
export class Tmp {
  @Column("character", { primary: true, name: "tmp_1", length: 9 })
  tmp_1!: string;
}
