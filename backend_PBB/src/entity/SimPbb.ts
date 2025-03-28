import { Column, Entity, Index } from "typeorm";

@Index("sim_pbb_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "simThnPajakPbb"], { unique: true })
@Entity("sim_pbb", { schema: "public" })
export class SimPbb {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "sim_thn_pajak_pbb", length: 4 })
  simThnPajakPbb!: string;

  @Column("bigint", { name: "sim_njop_bumi" })
  simNjopBumi!: string;

  @Column("bigint", { name: "sim_njop_bng" })
  simNjopBng!: string;

  @Column("bigint", { name: "sim_pbb_terhutang" })
  simPbbTerhutang!: string;
}
