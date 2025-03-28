import { Column, Entity, Index } from "typeorm";

@Index("jpb_jpt_pkey", ["kdJpbJpt"], { unique: true })
@Entity("jpb_jpt", { schema: "public" })
export class JpbJpt {
  @Column("character", { primary: true, name: "kd_jpb_jpt", length: 2 })
  kdJpbJpt!: string;

  @Column("character varying", { name: "nm_jpb_jpt", length: 30 })
  nmJpbJpt!: string;
}
