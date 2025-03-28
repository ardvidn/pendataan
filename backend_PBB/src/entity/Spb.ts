import { Column, Entity, Index } from "typeorm";

@Index("j5_1_ak", ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"], {
  unique: true,
})
@Index("spb_pkey", ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"], {
  unique: true,
})
@Entity("spb", { schema: "public" })
export class Spb {
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

  @Column("character", { name: "no_sk_spb", length: 30 })
  noSkSpb!: string;

  @Column("timestamp without time zone", { name: "tgl_sk_spb" })
  tglSkSpb!: Date;

  @Column("timestamp without time zone", { name: "tgl_rekam_spb" })
  tglRekamSpb!: Date;

  @Column("character", { name: "nip_rekam_spb", length: 18 })
  nipRekamSpb!: string;
}
