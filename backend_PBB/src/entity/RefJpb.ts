import { Column, Entity, Index } from "typeorm";

@Index("ref_jpb_pkey", ["kdJpb"], { unique: true })
@Entity("ref_jpb", { schema: "public" })
export class RefJpb {
  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character varying", { name: "nm_jpb", length: 50 })
  nmJpb!: string;
}
