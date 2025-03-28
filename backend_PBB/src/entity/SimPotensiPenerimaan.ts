import { Column, Entity, Index } from "typeorm";

@Index("sim_potensi_penerimaan_pkey", ["kdDati2", "kdPropinsi", "kdSektor", "simThnPajakPotensi"], { unique: true })
@Entity("sim_potensi_penerimaan", { schema: "public" })
export class SimPotensiPenerimaan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_pajak_potensi",
    length: 4,
  })
  simThnPajakPotensi!: string;

  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("bigint", { name: "sim_pbb_terhutang_potensi" })
  simPbbTerhutangPotensi!: string;
}
