import { Column, Entity, Index } from "typeorm";

@Index("l9_f2_fk", ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"], {})
@Index(
  "log_keluaran_pst_pkey",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "logTahunPajak", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  { unique: true }
)
@Index("l9_f3_fk", ["kdJnsPelayanan"], {})
@Entity("log_keluaran_pst", { schema: "public" })
export class LogKeluaranPst {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { primary: true, name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { primary: true, name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;

  @Column("character", {
    primary: true,
    name: "kd_propinsi_pemohon",
    length: 2,
  })
  kdPropinsiPemohon!: string;

  @Column("character", { primary: true, name: "kd_dati2_pemohon", length: 2 })
  kdDati2Pemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kecamatan_pemohon",
    length: 3,
  })
  kdKecamatanPemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kelurahan_pemohon",
    length: 3,
  })
  kdKelurahanPemohon!: string;

  @Column("character", { primary: true, name: "kd_blok_pemohon", length: 3 })
  kdBlokPemohon!: string;

  @Column("character", { primary: true, name: "no_urut_pemohon", length: 4 })
  noUrutPemohon!: string;

  @Column("character", { primary: true, name: "kd_jns_op_pemohon", length: 1 })
  kdJnsOpPemohon!: string;

  @Column("character", { primary: true, name: "log_tahun_pajak", length: 4 })
  logTahunPajak!: string;

  @Column("character", { name: "kd_jns_pelayanan", length: 2 })
  kdJnsPelayanan!: string;

  @Column("smallint", { name: "log_sppt", default: () => "0" })
  logSppt!: number;

  @Column("smallint", { name: "log_stts", default: () => "0" })
  logStts!: number;

  @Column("smallint", { name: "log_dhkp", default: () => "0" })
  logDhkp!: number;

  @Column("smallint", { name: "log_sk", default: () => "0" })
  logSk!: number;

  @Column("smallint", { name: "log_status", default: () => "0" })
  logStatus!: number;
}
