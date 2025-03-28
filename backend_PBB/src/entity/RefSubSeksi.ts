import { Column, Entity, Index } from "typeorm";

@Index("ref_sub_seksi_pkey", ["kdSeksi", "kdSubseksi"], { unique: true })
@Entity("ref_sub_seksi", { schema: "public" })
export class RefSubSeksi {
  @Column("character", { primary: true, name: "kd_seksi", length: 2 })
  kdSeksi!: string;

  @Column("character", { primary: true, name: "kd_subseksi", length: 2 })
  kdSubseksi!: string;

  @Column("character varying", { name: "nm_subseksi", length: 75 })
  nmSubseksi!: string;
}
