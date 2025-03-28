import { Column, Entity, Index } from "typeorm";

@Index("y4_1_ak", ["kdDati2", "kdJpb", "kdKecamatan", "kdKelurahan", "kdKlsBng", "kdPropinsi", "staThnNjopBng"], { unique: true })
@Index("y4_2_ak", ["kdDati2", "kdJpb", "kdKecamatan", "kdKelurahan", "kdKlsBng", "kdPropinsi", "staThnNjopBng"], { unique: true })
@Index("sta_njop_bng_pkey", ["kdDati2", "kdJpb", "kdKecamatan", "kdKelurahan", "kdKlsBng", "kdPropinsi", "staThnNjopBng", "thnAwalKlsBng"], { unique: true })
@Entity("sta_njop_bng", { schema: "public" })
export class StaNjopBng {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "sta_thn_njop_bng", length: 4 })
  staThnNjopBng!: string;

  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "kd_kls_bng", length: 3 })
  kdKlsBng!: string;

  @Column("character", { primary: true, name: "thn_awal_kls_bng", length: 4 })
  thnAwalKlsBng!: string;

  @Column("bigint", { name: "sta_total_op_bng", nullable: true })
  staTotalOpBng!: string | null;

  @Column("bigint", { name: "sta_total_luas_bng", nullable: true })
  staTotalLuasBng!: string | null;

  @Column("bigint", { name: "sta_total_nilai_bng", nullable: true })
  staTotalNilaiBng!: string | null;

  @Column("bigint", { name: "sta_njop_bng", nullable: true })
  staNjopBng!: string | null;
}
