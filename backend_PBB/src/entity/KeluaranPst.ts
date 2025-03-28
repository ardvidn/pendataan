import { Column, Entity, Index } from "typeorm";

@Index("keluaran_pst_pkey", ["kdJnsPelayanan"], { unique: true })
@Entity("keluaran_pst", { schema: "public" })
export class KeluaranPst {
  @Column("character", { primary: true, name: "kd_jns_pelayanan", length: 2 })
  kdJnsPelayanan!: string;

  @Column("smallint", { name: "sppt_pelayanan" })
  spptPelayanan!: number;

  @Column("smallint", { name: "stts_pelayanan" })
  sttsPelayanan!: number;

  @Column("smallint", { name: "dhkp_pelayanan" })
  dhkpPelayanan!: number;

  @Column("smallint", { name: "sk_pelayanan" })
  skPelayanan!: number;
}
