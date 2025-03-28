import { Column, Entity, Index } from "typeorm";

@Index("ref_jns_sektor_pkey", ["kdSektor"], { unique: true })
@Entity("ref_jns_sektor", { schema: "public" })
export class RefJnsSektor {
  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("character varying", { name: "nm_sektor", length: 75 })
  nmSektor!: string;
}
