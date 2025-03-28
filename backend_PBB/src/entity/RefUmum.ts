import { Column, Entity, Index } from "typeorm";

@Index("ref_umum_pkey", ["kdRef"], { unique: true })
@Entity("ref_umum", { schema: "public" })
export class RefUmum {
  @Column("bigint", { primary: true, name: "kd_ref" })
  kdRef!: string;

  @Column("character varying", { name: "keterangan", length: 100 })
  keterangan!: string;

  @Column("character varying", { name: "nm_ref", length: 250 })
  nmRef!: string;
}
